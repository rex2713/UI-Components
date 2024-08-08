import success from "../assets/img/alert/success.svg"
import info from "../assets/img/alert/info.svg"
import warn from "../assets/img/alert/warn.svg"
import error from "../assets/img/alert/error.svg"
import useStoreAlert from "../hooks/useStore"

interface AlertProps {
  type?: 'success' | 'info' | 'warn' | 'error',
  title?: string,
  description?: string,
  delay?: number,
}

const Alert: React.FC<AlertProps> = () => {
  const { show, type, title, description } = useStoreAlert();
  return (
    show && (
      <div className="alertAnimation z-50 bg-white shadow-lg border-secondary border-[1px] px-10 py-2 rounded-xl">
        <div className="flex gap-x-2 items-start">
          <div className="pt-[2px]">
            {type === 'success' && <img src={success}></img>}
            {type === 'info' && <img src={info}></img>}
            {type === 'warn' && <img src={warn}></img>}
            {type === 'error' && <img src={error}></img>}
          </div>
          <div className="font-light">
            <div className="text-lg font-normal text-primary">{title}</div>
            <div className="">{description}</div>
          </div>
        </div>
      </div>
    )
  )
}

export default Alert