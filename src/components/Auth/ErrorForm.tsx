interface IErrorForm {
  message: string | undefined;
}

function ErrorForm({ message }: IErrorForm) {
  return message === "" || !message ? null : (
    <div className=" mt-1 text-xs text-red-600">{message}</div>
  );
}

export default ErrorForm;
