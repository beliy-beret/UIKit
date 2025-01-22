import type { Meta, StoryObj } from "@storybook/react";
import { Pagination as PaginationComponent } from "../../components";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Example/Pagination",
  component: PaginationComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "standard",
  },
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
    },
    totalCount: {
      control: { type: "number", min: 1 },
    },
    perPage: {
      control: { type: "number", min: 1 },
    },
  },
  args: {
    totalCount: 10,
    perPage: 1,
    currentPage: 1,
    onChangePage: (page: number) => page,
  },
} satisfies Meta<typeof PaginationComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithoutArrowButton: Story = {
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(page: number) {
      updateArgs({ currentPage: page });
    }

    return <PaginationComponent {...args} onChangePage={onChange} />;
  },
};

export const WithArrowButton: Story = {
  args: {
    withArrow: true,
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(page: number) {
      updateArgs({ currentPage: page });
    }

    return <PaginationComponent {...args} onChangePage={onChange} />;
  },
};
