
export default function Fieldset({ label, children }) {
  return (
    <>
      <fieldset className="m-2 border-none p-0">
        {label && <legend className="tex-md font-bold mb-2"> {label} </legend>}

        <div className="flex flex-col justify-between self-start">
          {children}
        </div>
      </fieldset>
    </>
  );
}
