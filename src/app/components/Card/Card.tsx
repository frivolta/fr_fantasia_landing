export const Card = ({ text }: { text: string }) => {
  return (
    <div className="aspect-w-1 aspect-h-1 relative mt-8">
      <div
        className=" border border-solid border-opacity-30 p-4 aspect-w-1 aspect-h-1 w-full rounded-md bg-secondary bg-opacity-30"
        style={{ borderColor: "#282828" }}
      >
        <h3 className="text-primary text-center p-6">
          Powered by Golang, Accelerated by Goroutines
        </h3>
      </div>
    </div>
  );
};
