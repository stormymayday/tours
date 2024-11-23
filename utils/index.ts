import { TourType } from "@/types";

export async function fetchTours(url: string): Promise<TourType[]> {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch tours");
    const data = await response.json();
    return data;
}
