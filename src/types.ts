export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  priceNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  alt: string;
  imageUrl: string;
  caption: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  action?: {
    label: string;
    href: string;
  };
}
