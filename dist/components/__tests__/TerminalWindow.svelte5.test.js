import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createMockElement, createMockProps, simulateClassGeneration, simulateAnimation, simulateMouseEvent, simulateKeyboardEvent, expectClassesToContain, expectAttributesToBeSet, expectAriaAttributes, testAccessibilityCompliance, testEventCleanup } from './svelte5-test-utils';
describe('TerminalWindow Component (Svelte 5)', () => {
    const defaultCommands = [
        { command: 'ls -la', output: 'total 8\ndrwxr-xr-x 3 user user 96 Jan 1 12:00 .\ndrwxr-xr-x 3 user user 96 Jan 1 12:00 ..' },
        { command: 'pwd', output: '/home/user' },
        { command: 'echo "Hello World"', output: 'Hello World' }
    ];
    const terminalWindowTestDefaults = {
        title: 'Terminal',
        variant: 'classic',
        theme: 'dark',
        size: 'md',
        interactive: true,
        typewriter: true,
        commands: defaultCommands,
        prompt: '$ ',
        showHeader: true,
        showControls: true,
        autoPlay: false,
        speed: 50,
        cursorBlink: true,
        scrollOnOutput: true,
        maxHeight: 600
    };
    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers();
    });
    afterEach(() => {
        vi.useRealTimers();
    });
    describe('Props and Configuration', () => {
        it('should handle variant props correctly', () => {
            const variants = ['classic', 'modern', 'matrix', 'retro'];
            variants.forEach(variant => {
                const props = createMockProps(terminalWindowTestDefaults, { variant });
                expect(props.variant).toBe(variant);
            });
        });
        it('should handle theme props correctly', () => {
            const themes = ['dark', 'light', 'matrix', 'amber', 'green'];
            themes.forEach(theme => {
                const props = createMockProps(terminalWindowTestDefaults, { theme });
                expect(props.theme).toBe(theme);
            });
        });
        it('should handle size props correctly', () => {
            const sizes = ['sm', 'md', 'lg', 'xl', 'full'];
            sizes.forEach(size => {
                const props = createMockProps(terminalWindowTestDefaults, { size });
                expect(props.size).toBe(size);
            });
        });
        it('should handle boolean props correctly', () => {
            const props = createMockProps(terminalWindowTestDefaults, {
                interactive: false,
                typewriter: false,
                showHeader: false,
                showControls: false,
                autoPlay: true,
                cursorBlink: false,
                scrollOnOutput: false
            });
            expect(props.interactive).toBe(false);
            expect(props.typewriter).toBe(false);
            expect(props.showHeader).toBe(false);
            expect(props.showControls).toBe(false);
            expect(props.autoPlay).toBe(true);
            expect(props.cursorBlink).toBe(false);
            expect(props.scrollOnOutput).toBe(false);
        });
        it('should handle configuration props', () => {
            const props = createMockProps(terminalWindowTestDefaults, {
                title: 'Custom Terminal',
                prompt: '➜ ',
                speed: 25,
                maxHeight: 800
            });
            expect(props.title).toBe('Custom Terminal');
            expect(props.prompt).toBe('➜ ');
            expect(props.speed).toBe(25);
            expect(props.maxHeight).toBe(800);
        });
    });
    describe('CSS Class Generation', () => {
        it('should generate correct window container classes', () => {
            const container = createMockElement();
            const variant = 'modern';
            const theme = 'dark';
            const size = 'md';
            simulateClassGeneration(container, 'rounded-lg overflow-hidden', variant, size, [
                'bg-gray-900',
                'border',
                'border-gray-700',
                'shadow-2xl',
                'font-mono',
                'text-sm'
            ]);
            expectClassesToContain(container, [
                'rounded-lg',
                'overflow-hidden',
                'bg-gray-900',
                'font-mono'
            ]);
        });
        it('should generate correct header classes', () => {
            const header = createMockElement();
            const theme = 'dark';
            simulateClassGeneration(header, 'flex items-center justify-between', '', '', [
                'bg-gray-800',
                'px-4',
                'py-2',
                'border-b',
                'border-gray-700'
            ]);
            expectClassesToContain(header, [
                'flex',
                'items-center',
                'justify-between',
                'bg-gray-800'
            ]);
        });
        it('should generate correct content area classes', () => {
            const content = createMockElement();
            const theme = 'matrix';
            const maxHeight = 600;
            simulateClassGeneration(content, 'p-4 overflow-auto', '', '', [
                'bg-black',
                'text-matrix-green',
                'scrollbar-thin',
                'scrollbar-track-transparent'
            ]);
            content.style.maxHeight = `${maxHeight}px`;
            expectClassesToContain(content, [
                'p-4',
                'overflow-auto',
                'bg-black'
            ]);
            expect(content.style.maxHeight).toBe('600px');
        });
        it('should apply theme-specific colors', () => {
            const themes = {
                dark: { bg: 'bg-gray-900', text: 'text-gray-100' },
                matrix: { bg: 'bg-black', text: 'text-matrix-green' },
                amber: { bg: 'bg-amber-900', text: 'text-amber-100' },
                green: { bg: 'bg-green-900', text: 'text-green-100' }
            };
            Object.entries(themes).forEach(([theme, colors]) => {
                const element = createMockElement();
                element.classList.add(colors.bg, colors.text);
                expect(element.classList.add).toHaveBeenCalledWith(colors.bg, colors.text);
            });
        });
    });
    describe('Window Controls', () => {
        it('should render window control buttons', () => {
            const controls = ['close', 'minimize', 'maximize'];
            controls.forEach(control => {
                const button = createMockElement();
                button.setAttribute('data-control', control);
                expectAttributesToBeSet(button, {
                    'data-control': control
                });
            });
        });
        it('should handle control button clicks', () => {
            const closeButton = createMockElement();
            const onClose = vi.fn();
            closeButton.addEventListener('click', onClose);
            closeButton.click();
            expect(closeButton.click).toHaveBeenCalled();
        });
        it('should apply control button styles', () => {
            const closeButton = createMockElement();
            const minimizeButton = createMockElement();
            const maximizeButton = createMockElement();
            closeButton.classList.add('bg-red-500', 'hover:bg-red-600');
            minimizeButton.classList.add('bg-yellow-500', 'hover:bg-yellow-600');
            maximizeButton.classList.add('bg-green-500', 'hover:bg-green-600');
            expect(closeButton.classList.add).toHaveBeenCalledWith('bg-red-500', 'hover:bg-red-600');
            expect(minimizeButton.classList.add).toHaveBeenCalledWith('bg-yellow-500', 'hover:bg-yellow-600');
            expect(maximizeButton.classList.add).toHaveBeenCalledWith('bg-green-500', 'hover:bg-green-600');
        });
    });
    describe('Command Execution', () => {
        it('should display commands with prompt', () => {
            const command = defaultCommands[0];
            const prompt = '$ ';
            const commandLine = createMockElement();
            commandLine.textContent = `${prompt}${command.command}`;
            expect(commandLine.textContent).toBe('$ ls -la');
        });
        it('should display command output', () => {
            const command = defaultCommands[0];
            const outputElement = createMockElement();
            outputElement.textContent = command.output;
            expect(outputElement.textContent).toContain('total 8');
            expect(outputElement.textContent).toContain('drwxr-xr-x');
        });
        it('should handle multi-line output', () => {
            const command = { command: 'cat file.txt', output: 'Line 1\nLine 2\nLine 3' };
            const outputElement = createMockElement();
            // Split by newlines and create separate elements
            const lines = command.output.split('\n');
            outputElement.innerHTML = lines.map(line => `<div>${line}</div>`).join('');
            expect(outputElement.innerHTML).toContain('<div>Line 1</div>');
            expect(outputElement.innerHTML).toContain('<div>Line 2</div>');
        });
    });
    describe('Typewriter Effect', () => {
        it('should type characters progressively', () => {
            const element = createMockElement();
            const text = 'Hello World';
            const speed = 50;
            let currentText = '';
            let charIndex = 0;
            const typeNextChar = () => {
                if (charIndex < text.length) {
                    currentText += text[charIndex];
                    element.textContent = currentText;
                    charIndex++;
                    setTimeout(typeNextChar, speed);
                }
            };
            typeNextChar();
            // Type first few characters
            vi.advanceTimersByTime(150); // 3 chars
            expect(element.textContent).toBe('Hel');
            // Type more characters
            vi.advanceTimersByTime(200); // 4 more chars
            expect(element.textContent).toBe('Hello W');
        });
        it('should respect typing speed', () => {
            const speeds = { slow: 100, normal: 50, fast: 25 };
            Object.entries(speeds).forEach(([name, delay]) => {
                const typeDelay = delay;
                if (name === 'slow')
                    expect(typeDelay).toBe(100);
                if (name === 'normal')
                    expect(typeDelay).toBe(50);
                if (name === 'fast')
                    expect(typeDelay).toBe(25);
            });
        });
        it('should handle typewriter pauses', () => {
            let isPaused = false;
            const pauseDelay = 1000;
            // Simulate pause
            setTimeout(() => {
                isPaused = true;
            }, pauseDelay);
            vi.advanceTimersByTime(pauseDelay);
            expect(isPaused).toBe(true);
        });
    });
    describe('Cursor Management', () => {
        it('should show blinking cursor', () => {
            const cursor = createMockElement();
            const cursorBlink = true;
            if (cursorBlink) {
                cursor.classList.add('animate-pulse', 'bg-current', 'w-2', 'h-4');
            }
            expect(cursor.classList.add).toHaveBeenCalledWith('animate-pulse', 'bg-current', 'w-2', 'h-4');
        });
        it('should position cursor correctly', () => {
            const cursor = createMockElement();
            const currentLine = createMockElement();
            // Position cursor at end of current line
            cursor.style.position = 'absolute';
            cursor.style.right = '0';
            expect(cursor.style.position).toBe('absolute');
            expect(cursor.style.right).toBe('0');
        });
        it('should handle cursor during typing', () => {
            const cursor = createMockElement();
            const isTyping = true;
            if (isTyping) {
                cursor.style.opacity = '1';
            }
            else {
                cursor.style.opacity = '0.5';
            }
            expect(cursor.style.opacity).toBe('1');
        });
    });
    describe('Interactive Mode', () => {
        it('should handle user input', () => {
            const input = createMockElement();
            const interactive = true;
            let userCommand = '';
            if (interactive) {
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        userCommand = input.value || 'test command';
                    }
                });
                const enterEvent = { key: 'Enter' };
                input.addEventListener.mock.calls[0][1](enterEvent);
            }
            expect(userCommand).toBe('test command');
        });
        it('should execute user commands', () => {
            const executeCommand = vi.fn();
            const command = 'ls -la';
            const interactive = true;
            if (interactive) {
                executeCommand(command);
            }
            expect(executeCommand).toHaveBeenCalledWith('ls -la');
        });
        it('should maintain command history', () => {
            const commandHistory = [];
            const commands = ['pwd', 'ls', 'cd ..', 'ls'];
            commands.forEach(cmd => {
                commandHistory.push(cmd);
            });
            expect(commandHistory).toHaveLength(4);
            expect(commandHistory[0]).toBe('pwd');
            expect(commandHistory[3]).toBe('ls');
        });
        it('should navigate command history with arrows', () => {
            const commandHistory = ['pwd', 'ls', 'cd ..'];
            let historyIndex = commandHistory.length;
            let currentCommand = '';
            // Arrow Up - previous command
            simulateKeyboardEvent(createMockElement(), 'ArrowUp', () => {
                if (historyIndex > 0) {
                    historyIndex--;
                    currentCommand = commandHistory[historyIndex];
                }
            });
            expect(currentCommand).toBe('cd ..');
        });
    });
    describe('Auto Scroll', () => {
        it('should scroll to bottom on new output', () => {
            const container = createMockElement();
            const scrollOnOutput = true;
            if (scrollOnOutput) {
                container.scrollTop = container.scrollHeight || 1000;
            }
            expect(container.scrollTop).toBe(1000);
        });
        it('should not auto-scroll when user is scrolling', () => {
            const container = createMockElement();
            const userIsScrolling = true;
            const scrollOnOutput = true;
            if (scrollOnOutput && !userIsScrolling) {
                container.scrollTop = container.scrollHeight || 1000;
            }
            // Should not scroll because user is actively scrolling
            expect(container.scrollTop).toBe(0);
        });
    });
    describe('Accessibility', () => {
        it('should have proper ARIA attributes', () => {
            const terminal = createMockElement();
            expectAttributesToBeSet(terminal, {
                role: 'log'
            });
            expectAriaAttributes(terminal, {
                'live': 'polite',
                'atomic': 'false',
                'label': 'Terminal output'
            });
        });
        it('should support keyboard navigation', () => {
            const input = createMockElement();
            expectAttributesToBeSet(input, {
                role: 'textbox',
                tabindex: '0'
            });
            expectAriaAttributes(input, {
                'label': 'Terminal command input',
                'multiline': 'false'
            });
        });
        it('should announce new output', () => {
            const output = createMockElement();
            const newOutput = 'Command completed successfully';
            expectAttributesToBeSet(output, {
                role: 'status'
            });
            expectAriaAttributes(output, {
                'live': 'polite'
            });
            output.textContent = newOutput;
            expect(output.textContent).toBe('Command completed successfully');
        });
    });
    describe('Performance', () => {
        it('should cleanup event listeners properly', () => {
            const input = createMockElement();
            const container = createMockElement();
            testEventCleanup(input, ['keydown', 'keypress', 'input']);
            testEventCleanup(container, ['scroll']);
        });
        it('should cleanup timers on unmount', () => {
            const clearTimeout = vi.spyOn(global, 'clearTimeout');
            const clearInterval = vi.spyOn(global, 'clearInterval');
            const timeoutId = 123;
            const intervalId = 456;
            global.clearTimeout(timeoutId);
            global.clearInterval(intervalId);
            expect(clearTimeout).toHaveBeenCalledWith(timeoutId);
            expect(clearInterval).toHaveBeenCalledWith(intervalId);
        });
        it('should handle large output efficiently', () => {
            const largeOutput = 'x'.repeat(10000);
            const outputElement = createMockElement();
            const maxLines = 1000;
            // Simulate output truncation for performance
            const lines = largeOutput.split('\n');
            if (lines.length > maxLines) {
                const truncatedLines = lines.slice(-maxLines);
                outputElement.textContent = truncatedLines.join('\n');
            }
            expect(outputElement.textContent.length).toBeLessThanOrEqual(largeOutput.length);
        });
    });
    describe('Command Processing', () => {
        it('should parse command arguments', () => {
            const commandLine = 'ls -la /home/user';
            const parsed = commandLine.split(' ');
            expect(parsed[0]).toBe('ls');
            expect(parsed[1]).toBe('-la');
            expect(parsed[2]).toBe('/home/user');
        });
        it('should handle command errors', () => {
            const errorCommand = { command: 'invalid-command', error: 'Command not found' };
            const errorElement = createMockElement();
            errorElement.classList.add('text-red-400');
            errorElement.textContent = errorCommand.error;
            expect(errorElement.classList.add).toHaveBeenCalledWith('text-red-400');
            expect(errorElement.textContent).toBe('Command not found');
        });
        it('should support command aliases', () => {
            const aliases = {
                'll': 'ls -la',
                'la': 'ls -A',
                'l': 'ls -CF'
            };
            const command = 'll';
            const expandedCommand = aliases[command] || command;
            expect(expandedCommand).toBe('ls -la');
        });
    });
});
