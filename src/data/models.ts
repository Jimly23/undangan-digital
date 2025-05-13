
export interface Theme {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface InvitationStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface Invitation {
  id: string;
  title: string;
  themeId: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  createdAt: string;
  status: "active" | "draft" | "expired";
  invitationUrl: string;
}
