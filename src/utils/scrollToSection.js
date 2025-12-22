export const scrollToSection = (id, offset = 0) => {
  if (typeof window === 'undefined') return; // prevents SSR issues

  const section = document.getElementById(id);
  if (section) {
    const elementTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollTo = elementTop - offset;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
  }
};
