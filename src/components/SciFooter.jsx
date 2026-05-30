
const SciFooter = () => {
  return (
    <div>
        <footer className="flex flex-col gap-2 sm:flex-row sm:justify-between py-6 w-full shrink-0 items-start sm:items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} SpeedCubers India. All rights reserved.</p>
        <a
          href="mailto:contact@speedcubersindia.com"
          className="text-xs text-muted-foreground hover:underline hover:underline-offset-2"
        >
          contact@speedcubersindia.com
        </a>
      </footer>
    </div>
  )
}

export default SciFooter