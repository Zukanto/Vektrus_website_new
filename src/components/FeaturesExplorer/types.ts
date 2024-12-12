import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  prompt: string;
  icon: LucideIcon;
  image: string;
}