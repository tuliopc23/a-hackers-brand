export interface TerminalCommand {
  id: string;
  command: string;
  output?: string;
  timestamp: Date;
  duration?: number;
  type: 'success' | 'error' | 'info' | 'system' | 'ai-suggestion';
  status: 'idle' | 'running' | 'completed' | 'failed';
}
