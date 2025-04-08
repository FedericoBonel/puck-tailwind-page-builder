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
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    GridBlock: {
      render: () => {
        return (
          <DropZone
            zone="my-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
          />
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
