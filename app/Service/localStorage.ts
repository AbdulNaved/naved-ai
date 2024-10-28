const MESSAGES_KEY = 'messages';
const HISTORY_KEY = 'history';

const localStorageService = {
  // Check if we're running in a browser environment
  isBrowser() {
    return typeof window !== 'undefined';
  },

  // Get stored messages from localStorage (client-side only)
  getMessages() {
    if (!this.isBrowser()) return [];

    const messages = localStorage.getItem(MESSAGES_KEY);
    
    // Safely parse the JSON only if `messages` is not null or undefined
    try {
      return messages ? JSON.parse(messages) : [];
    } catch (error) {
      console.error('Error parsing messages from localStorage:', error);
      return [];
    }
  },

  // Save messages to localStorage (client-side only)
  saveMessages(messages: Array<any>) {
    if (this.isBrowser()) {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
    }
  },

  // Clear messages from localStorage (client-side only)
  clearMessages() {
    if (this.isBrowser()) {
      localStorage.removeItem(MESSAGES_KEY);
    }
  },

  // Get stored history from localStorage (client-side only)
  getHistory() {
    if (!this.isBrowser()) return [];

    const history = localStorage.getItem(HISTORY_KEY);
    
    // Safely parse the JSON only if `history` is not null or undefined
    try {
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error parsing history from localStorage:', error);
      return [];
    }
  },

  // Save history to localStorage (client-side only)
  saveHistory(history: Array<string>) {
    if (this.isBrowser()) {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    }
  },

  // Clear history from localStorage (client-side only)
  clearHistory() {
    if (this.isBrowser()) {
      localStorage.removeItem(HISTORY_KEY);
    }
  }
};

export default localStorageService;


// const storageService = {
//     isBrowser() {
//       return typeof window !== "undefined";
//     },
  
//     // Get stored messages from localStorage (client-side only)
//     getMessages() {
//       if (!this.isBrowser()) {
//         return []; // Return an empty array if not in the browser
//       }
  
//       // Safely handle invalid or undefined storage values
//       const messages = localStorage.getItem('messages');
//       if (messages) {
//         try {
//           return JSON.parse(messages); // Attempt to parse stored messages
//         } catch (error) {
//           console.error("Failed to parse messages from localStorage:", error);
//           return []; // Return empty array in case of parsing error
//         }
//       }
//       return []; // Return empty array if no messages are stored
//     },
  
//     // Save messages to localStorage (client-side only)
//     saveMessages(messages: Array<any>) {
//       if (this.isBrowser()) {
//         localStorage.setItem('messages', JSON.stringify(messages));
//       }
//     },
  
//     // Clear messages from localStorage (client-side only)
//     clearMessages() {
//       if (this.isBrowser()) {
//         localStorage.removeItem('messages');
//       }
//     }
//   };
  
//   // Assign object to a variable before exporting as module default
// export default storageService;
  

// // src/services/localStorage.ts

// const MESSAGES_KEY = 'messages';
// const HISTORY_KEY = 'history';

// export default {
//   // Check if running in the browser
//   isBrowser() {
//     return typeof window !== "undefined";
//   },

//   // Get stored messages from localStorage (client-side only)
//   getMessages() {
//     if (!this.isBrowser()) {
//       return []; // Return an empty array if not in the browser
//     }
//     const messages = localStorage.getItem(MESSAGES_KEY);
//     return messages ? JSON.parse(messages) : [];
//   },

//   // Save messages to localStorage (client-side only)
//   saveMessages(messages: Array<any>) {
//     if (this.isBrowser()) {
//       localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
//     }
//   },

//   // Clear messages from localStorage (client-side only)
//   clearMessages() {
//     if (this.isBrowser()) {
//       localStorage.removeItem(MESSAGES_KEY);
//     }
//   },

//   // Get stored history from localStorage (client-side only)
//   getHistory() {
//     if (!this.isBrowser()) {
//       return [];
//     }
//     const history = localStorage.getItem(HISTORY_KEY);
//     return history ? JSON.parse(history) : [];
//   },

//   // Save history to localStorage (client-side only)
//   saveHistory(history: Array<string>) {
//     if (this.isBrowser()) {
//       localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
//     }
//   },

//   // Clear history from localStorage (client-side only)
//   clearHistory() {
//     if (this.isBrowser()) {
//       localStorage.removeItem(HISTORY_KEY);
//     }
//   }
// };
