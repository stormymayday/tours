const url = "https://www.course-api.com/react-tours-project";
import { fetchTours } from "@/utils";

export default async function Home() {
    const data = await fetchTours(url);

    console.log(data);

    return (
        <div>
            <h1>Hello!</h1>
        </div>
    );
}
