export type CourseType = {
  title: string;
  description: string;
};

export const courseTypes: CourseType[] = [
  {
    title: "Graduações",
    description:
      "Escolha a formação que mais combina com seus objetivos e com o futuro que você quer construir.",
  },
  {
    title: "Graduação Tecnológica",
    description:
      "Escolha a formação que mais combina com seus objetivos e com o futuro que você quer construir.",
  },
  {
    title: "Pós-Graduação",
    description:
      "Escolha a formação que mais combina com seus objetivos e com o futuro que você quer construir.",
  },
];

export type BeyondItem = {
  image: string;
  label: string;
  alt: string;
};

export const beyondItems: BeyondItem[] = [
  { image: "/images/places/campus.jpg", label: "Biblioteca", alt: "Biblioteca da Unifamec" },
  { image: "/images/places/classroom.jpg", label: "Laboratório de Informática", alt: "Laboratório de informática" },
  { image: "/images/places/classroom.jpg", label: "Sala de Aula", alt: "Sala de aula" },
  { image: "/images/places/library.jpg", label: "Biblioteca", alt: "Espaço de estudo na biblioteca" },
  { image: "/images/places/city.jpg", label: "Auditório", alt: "Auditório da Unifamec" },
];

export type GalleryItem = {
  image: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  { image: "/images/gallery/gallery-1.jpg", alt: "Sala de aula moderna" },
  { image: "/images/gallery/gallery-2.jpg", alt: "Estudantes confraternizando" },
  { image: "/images/gallery/gallery-3.jpg", alt: "Turma reunida em aula" },
  { image: "/images/gallery/gallery-4.jpg", alt: "Formatura Unifamec" },
  { image: "/images/gallery/gallery-5.jpg", alt: "Estudantes no campus" },
  { image: "/images/gallery/gallery-6.jpg", alt: "Colação de grau" },
  { image: "/images/gallery/gallery-7.jpg", alt: "Grupo de amigos no campus" },
  { image: "/images/gallery/gallery-8.jpg", alt: "Estudante sorrindo" },
  { image: "/images/gallery/gallery-9.jpg", alt: "Evento acadêmico" },
];

export type SocialPost = {
  image: string;
  handle: string;
};

export const socialPosts: SocialPost[] = [
  { image: "/images/instagram/insta-1.jpg", handle: "@unifamec_edu" },
  { image: "/images/instagram/insta-1.jpg", handle: "@unifamec_edu" },
  { image: "/images/instagram/insta-1.jpg", handle: "@unifamec_edu" },
  { image: "/images/instagram/insta-1.jpg", handle: "@unifamec_edu" },
  { image: "/images/instagram/insta-1.jpg", handle: "@unifamec_edu" },
  { image: "/images/instagram/insta-1.jpg", handle: "@unifamec_edu" },
  { image: "/images/instagram/insta-1.jpg", handle: "@unifamec_edu" },
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
