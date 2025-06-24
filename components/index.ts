/**
 * Brand System - Main Component Library
 * This project demonstrates advanced technical capabilities built on Glass UI foundation
 */

// Re-export core Glass UI primitives
export {
  Button,
  Input,
  Textarea,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  Badge,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  cn,
} from '../glass-ui/src/index';

// Brand System Advanced Components
export * from './terminal';

// Existing showcase components (these will be gradually migrated)
export * from './marketing';
export * from './layout';
export * from './showcase';

// Advanced Libraries (these showcase technical depth)
export * from '../lib/physics';
export * from '../lib/animations';
