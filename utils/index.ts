import { TourType } from "@/types";

export async function fetchTours(url: string): Promise<TourType[]> {
    // Artificial delay
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch tours");
    const data: TourType[] = await response.json();
    return data;
}
