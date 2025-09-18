"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";
import { GoogleButton } from "@/components/oauth/google";

export default function LoginPage() {
  const { signInForm, handleSignIn, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = signInForm;

  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="p-8 pb-6">
          <div>
            <Link href="/" aria-label="go home"></Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">
              Iniciar sesión BocetIA
            </h1>
            <p className="text-sm">
              Bienvenido de nuevo! Inicia sesión para continuar
            </p>
          </div>

          <hr className="my-4 border-dashed" />

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Email
              </Label>
              <Input
                type="email"
                required
                id="email"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="pwd" className="text-sm">
                  Contraseña
                </Label>
                <Button asChild variant="link" size="sm">
                  <Link
                    href="#"
                    className="link intent-info variant-ghost text-sm"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Button>
              </div>
              <Input
                type="password"
                id="password"
                {...register("password")}
                className={
                  errors.password
                    ? "border-destructive input sz-md variant-mixed"
                    : "input sz-md variant-mixed"
                }
              />
              {errors.password && (
                <p className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>
            {errors.root && (
              <p className="text-sm text-destructive text-center">
                {errors.root.message}
              </p>
            )}

            <Button className="w-full" disabled={isLoading} type="submit">
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                "Iniciar sesión"
              )}
            </Button>
          </div>

          <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <hr className="my-4 border-dashed" />
            <p className="text-sm text-center text-muted-foreground">
              O continua con
            </p>
            <hr className="my-4 border-dashed" />
          </div>

          <GoogleButton />
        </div>

        <div className="bg-muted rounded-(--radius) border p-3">
          <p className="text-accent-foreground text-center text-sm">
            ¿No tienes una cuenta?
            <Button asChild variant="link" className="px-2">
              <Link href="/auth/sign-up">Crear cuenta</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
