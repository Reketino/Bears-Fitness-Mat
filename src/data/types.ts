
export type Category = "core" | "stretch" | "strength" | "mage" | "planke";

export type Exercise = {
    name: string
    time: number
    category: Category;
};
