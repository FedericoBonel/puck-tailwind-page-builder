import { DropZone, type Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string };
  GridBlock: {};
  CardBlock: {
    title: string;
    description: string;
    padding: number;
  };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div className="text-4xl font-bold p-4">
          <h1>{title}</h1>
        </div>
      ),
    },
    GridBlock: {
      render: () => {
        return (
          <DropZone zone="my-grid" className="grid grid-cols-3 gap-4 p-4" />
        );
      },
    },
    CardBlock: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        padding: { type: "number" },
      },
      defaultProps: {
        title: "Title",
        description: "This is a description...",
        padding: 16,
      },
      render: ({ title, description, padding }) => {
        return (
          <div style={{ padding }}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        );
      },
    },
  },
};

export default config;
