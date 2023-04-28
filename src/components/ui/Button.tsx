import { cva } from "class-variance-authority";
import { FC } from "react";

interface ButtonProps {}

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-line  focus:ring-slate-400  focus:ring-offset-2 displayed:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900"
,
{
    variants:{
        variant:{
            default:'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100  ',
            outline:
            
        }

    }
}
);

const Button: FC<ButtonProps> = ({}) => {
  return <div>Button</div>;
};

export default Button;
