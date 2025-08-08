# Theme Store Error Handling Demo

## 🎯 **Quick Test Guide**

### **1. Basic Usage with Error Handling**
```typescript
import { theme, contrastMode, ThemeErrorReporter } from 'a-hackers-brand';

// Safe theme switching with validation
theme.set('bubbleTea');        // ✅ Valid
theme.set('invalid-theme');    // ❌ Blocked + Error logged

// Check for errors
const errors = theme.getErrors();
console.log('Recent errors:', errors);

// Monitor storage availability
if (!theme.isStorageAvailable()) {
    console.log('⚠️ Theme preferences will not persist');
}
```

### **2. Advanced Monitoring**
```typescript
import { ThemeMonitor } from 'a-hackers-brand';

// Comprehensive health check
const health = ThemeMonitor.healthCheck();
console.log('System health:', {
    storage: health.isStorageAvailable,
    mediaQueries: health.isMediaQuerySupported,
    config: health.hasValidThemeConfig,
    recommendations: health.recommendations
});

// Generate troubleshooting report
const report = ThemeMonitor.troubleshoot();
console.log(report); // Markdown format report
```

### **3. Real-time Error Monitoring**
```typescript
// Watch for errors in real-time
const cleanup = ThemeMonitor.watchErrors((error) => {
    console.log(`New error: ${error.code}`, error);
    
    // Handle specific error types
    if (error.code === 'STORAGE_WRITE_ERROR') {
        showUserNotification('Settings could not be saved');
    }
});

// Clean up when done
cleanup();
```

## 🧪 **Testing Scenarios**

### **Test 1: Invalid Data Handling**
```javascript
// Corrupt localStorage data
localStorage.setItem('ahb-theme', 'invalid-value');
localStorage.setItem('ahb-contrast-mode', '{"broken": "json"');

// Theme store will automatically:
// ✅ Detect invalid data
// ✅ Log structured errors  
// ✅ Clean up corrupted data
// ✅ Fallback to safe defaults
```

### **Test 2: Storage Unavailable**
```javascript
// Simulate storage failure
Object.defineProperty(window, 'localStorage', {
    value: null,
    writable: true
});

// Theme store will:
// ✅ Detect unavailable storage
// ✅ Continue working without persistence
// ✅ Show clear error messages
// ✅ Provide graceful degradation
```

### **Test 3: DOM Manipulation Errors**
```javascript
// Simulate DOM access issues
document.documentElement.classList = null;

// Theme store will:
// ✅ Catch DOM errors safely
// ✅ Log specific error context
// ✅ Continue updating store state
// ✅ Provide fallback behavior
```

## 🔧 **Debug Panel Usage**

### **Add to Any Component**
```svelte
<script>
import { ThemeDebugPanel } from 'a-hackers-brand';
</script>

<!-- Adds floating debug button in development -->
<ThemeDebugPanel showAdvanced={true} />
```

### **Debug Panel Features**
- 📊 **Real-time Health Monitoring**
- 🚨 **Error Log with Context**
- 💡 **Smart Recommendations**
- 📄 **Downloadable Reports**
- 🔄 **System Reset Tools**
- ⚡ **Live Error Injection for Testing**

## 📈 **Error Codes Reference**

### **Storage Errors**
| Code | Description | Resolution |
|------|-------------|------------|
| `STORAGE_UNAVAILABLE` | localStorage not accessible | Continue without persistence |
| `STORAGE_READ_ERROR` | Failed to read settings | Use default values |
| `STORAGE_WRITE_ERROR` | Failed to save settings | Show user notification |
| `STORAGE_DELETE_ERROR` | Failed to clear settings | Manual cleanup needed |

### **Validation Errors**
| Code | Description | Resolution |
|------|-------------|------------|
| `INVALID_STORED_THEME` | Corrupted theme data | Auto-cleanup + reset to default |
| `INVALID_THEME_TYPE` | Invalid theme parameter | Block operation + log error |
| `INVALID_CONTRAST_SET` | Invalid contrast mode | Block operation + log error |

### **System Errors**
| Code | Description | Resolution |
|------|-------------|------------|
| `SYSTEM_THEME_DETECTION_FAILED` | Can't detect system preference | Use terminal as fallback |
| `MATCHMEDIA_UNAVAILABLE` | Browser lacks media query support | Disable auto-switching |
| `DOM_THEME_APPLICATION_FAILED` | Can't apply CSS classes | Continue with store updates |

## 🎯 **Production Benefits**

### **For Developers**
- ✅ **Clear Error Messages** with actionable context
- ✅ **Categorized Error Codes** for easy debugging
- ✅ **Built-in Health Checks** prevent issues before deployment
- ✅ **Comprehensive Logging** for troubleshooting

### **For Users**
- ✅ **Never Crashes** - robust fallbacks for all scenarios
- ✅ **Graceful Degradation** - features disable cleanly when unavailable
- ✅ **Consistent Experience** - works across all browsers and environments
- ✅ **Accessibility Maintained** - error handling preserves WCAG compliance

### **For Operations**
- ✅ **Zero Downtime** - errors don't break the application
- ✅ **Monitoring Ready** - structured errors for analytics
- ✅ **Self-Healing** - automatic recovery from common issues
- ✅ **Audit Trail** - complete error history with timestamps

---

## 🚀 **Quick Start**

```bash
# Install the package
npm install a-hackers-brand

# Import and use with error handling
import { theme, ThemeMonitor } from 'a-hackers-brand';

// Check system health
const health = ThemeMonitor.healthCheck();
console.log('Theme system ready:', health.hasValidThemeConfig);

// Set up theme with confidence
theme.set('bubbleTea'); // Always safe, always works
```

The theme store now provides **enterprise-grade reliability** while maintaining the simple, elegant API you expect. Build with confidence knowing your users will always have a consistent, accessible experience! ✨