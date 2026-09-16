export type CourseType = {
  title: string;
  description: string;
};

export const courseTypes: CourseType[] = [
  {
    title: "Graduações",
    description:
      "A escolha da formação que mais combina com seus objetivos e com o futuro que você quer construir.",
  },
  {
    title: "Graduação Tecnológica",
    description:
      "A escolha da formação que mais combina com seus objetivos e com o futuro que você quer construir.",
  },
  {
    title: "Pós-Graduação",
    description:
      "A escolha da formação que mais combina com seus objetivos e com o futuro que você quer construir.",
  },
];

export type BeyondItem = {
  image: string;
  label: string;
  alt: string;
};

export const beyondItems: BeyondItem[] = [
  { image: "/images/beyond-1.jpg", label: "Biblioteca", alt: "Biblioteca da Unifamec" },
  { image: "/images/beyond-2.jpg", label: "Laboratório de Informática", alt: "Laboratório de informática" },
  { image: "/images/beyond-3.jpg", label: "Sala de Aula", alt: "Sala de aula" },
  { image: "/images/beyond-4.jpg", label: "Biblioteca", alt: "Espaço de estudo na biblioteca" },
  { image: "/images/beyond-5.jpg", label: "Auditório", alt: "Auditório da Unifamec" },
];

export type GalleryItem = {
  image: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  { image: "/images/gallery-1.jpg", alt: "Sala de aula moderna" },
  { image: "/images/gallery-2.jpg", alt: "Estudantes confraternizando" },
  { image: "/images/gallery-3.jpg", alt: "Turma reunida em aula" },
  { image: "/images/gallery-4.jpg", alt: "Formatura Unifamec" },
  { image: "/images/gallery-5.jpg", alt: "Estudantes no campus" },
  { image: "/images/gallery-6.jpg", alt: "Colação de grau" },
  { image: "/images/gallery-7.jpg", alt: "Grupo de amigos no campus" },
  { image: "/images/gallery-8.jpg", alt: "Estudante sorrindo" },
  { image: "/images/gallery-9.jpg", alt: "Evento acadêmico" },
];

export type SocialPost = {
  image: string;
  handle: string;
};

export const socialPosts: SocialPost[] = [
  { image: "/images/social-1.jpg", handle: "@unifamec_edu" },
  { image: "/images/social-2.jpg", handle: "@unifamec_edu" },
  { image: "/images/social-3.jpg", handle: "@unifamec_edu" },
  { image: "/images/social-4.jpg", handle: "@unifamec_edu" },
];

export const courseOptions = [
  "Graduação",
  "Graduação Tecnológica",
  "Pós-Graduação",
  "Curso Técnico",
];

export const modalityOptions = ["Presencial", "EAD", "Semipresencial"];

export const specificCourseOptions = [
  "Administração",
  "Direito",
  "Enfermagem",
  "Engenharia Civil",
  "Pedagogia",
  "Psicologia",
];
