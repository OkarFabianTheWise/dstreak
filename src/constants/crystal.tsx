import { cn } from "@/lib/utils"
import fsh from "../assets/image/fsh.png"
import admin from "../assets/image/admin.png"
import members from "../assets/image/members.png"
import naija from "../assets/image/nigeria.svg"

type RoleType = "SUPER_ADMIN" | "ADMIN" | "OTHER"

interface RoleCrystalProps {
  role: RoleType
  showCount?: boolean
  count?: number
  className?: string
}

export function RoleCrystal({ role, showCount, count, className }: RoleCrystalProps) {
  const getCrystalStyles = (role: RoleType) => {
    switch (role) {
      case "SUPER_ADMIN":
        return {
          image: fsh,
          glow: "[filter:drop-shadow(0_0_8px_rgba(236,72,153,0.5))]",
          textColor: "text-pink-500",
        }
      case "ADMIN":
        return {
          image: admin,
          glow: "[filter:drop-shadow(0_0_8px_rgba(234,179,8,0.5))]",
          textColor: "text-yellow-500",
        }
      case "OTHER":
        return {
          image: members,
          glow: "[filter:drop-shadow(0_0_8px_rgba(34,197,94,0.5))]",
          textColor: "text-green-500",
        }
    }
  }

  const styles = getCrystalStyles(role)

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <img
          src={styles.image || naija}
          alt={`${role.toLowerCase()} crystal`}
          className={cn("size-6 animate-pulse", styles.glow)}
        />
        <div className="absolute inset-0 animate-ping opacity-50">
          <img src={styles.image || naija} alt="" className="size-6" />
        </div>
      </div>
      {showCount && <span className={cn("font-mono text-lg", styles.textColor)}>{count?.toLocaleString()}</span>}
    </div>
  )
}

