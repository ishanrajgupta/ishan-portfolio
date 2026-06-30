import { useEffect, useState } from 'react';

export function TypingHeadline({ words, className = '' }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeWord = words[index % words.length];
    const timeout = setTimeout(
      () => {
        setText((current) => {
          const nextLength = isDeleting ? current.length - 1 : current.length + 1;
          return activeWord.slice(0, Math.max(nextLength, 0));
        });

        if (!isDeleting && text === activeWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }

        if (isDeleting && text === '') {
          setIsDeleting(false);
          setIndex((current) => current + 1);
        }
      },
      isDeleting ? 45 : 90,
    );

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, words]);

  return (
    <span className={`inline-flex min-h-[1.4em] items-center border-r-2 border-purple-300 pr-1 text-white ${className}`}>
      {text}
    </span>
  );
}