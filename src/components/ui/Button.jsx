import { buttonStyles } from '../../lib/buttonStyles'

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}) {
  return <button type={type} className={buttonStyles({ variant, size, className })} {...props} />
}
