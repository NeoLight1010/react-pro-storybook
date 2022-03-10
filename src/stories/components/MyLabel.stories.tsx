import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: "UI/MyLabel",
    component: MyLabel,
    argTypes: {
        size: {
            control: "select",
        },
        color: {
            control: "select",
        },
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args): JSX.Element => (
    <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
    size: "normal",
    label: "My Label",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: "normal",
    label: "My Label",
    allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    size: "normal",
    label: "My Label",
    color: "secondary"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: "normal",
    label: "My Label",
    color: "tertiary"
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: "normal",
    label: "My Label",
    backgroundColor: "#e286ff",
};
