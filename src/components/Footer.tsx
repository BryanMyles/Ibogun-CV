export default function Footer() {
  return (
    <footer className="h-[50px] bg-white border-t border-[color:var(--color-border-light)] flex items-center justify-center text-xs text-[color:var(--color-text-muted)] mt-auto">
      &copy; {new Date().getFullYear()} Ibogun Computer Village | Near Main Gate, University Campus | 08123689153
    </footer>
  );
}
