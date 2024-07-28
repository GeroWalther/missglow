import { FileWarningIcon, Mail } from "lucide-react";
import { FC } from "react";

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent: FC<ErrorComponentProps> = ({ message }) => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h5 className="mb-6 text-[32px] font-bold text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                {message}
              </h5>

              <ul>
                <li>
                  <div className="flex items-center">
                    <Mail size={24} className="text-primary" />
                    <span className="ml-4 text-body-color">
                      gero.walther@gmail.com
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <FileWarningIcon
            size={200}
            className="w-full px-4 lg:w-1/2 xl:w-6/12"
          />
        </div>
      </div>
    </section>
  );
};

export default ErrorComponent;
