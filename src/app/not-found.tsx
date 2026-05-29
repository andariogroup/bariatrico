import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold">Página no encontrada</h1>
      <p className="mt-2 text-muted-foreground">
        La página que buscas no existe o fue movida.
      </p>
      <Button
        render={<Link href="/" />}
        nativeButton={false}
        className="mt-6"
      >
        Volver al inicio
      </Button>
    </div>
  );
}
