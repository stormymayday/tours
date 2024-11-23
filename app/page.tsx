import { fetchTours } from "@/utils";

export default async function Home() {
    const url = "https://www.course-api.com/react-tours-project";
    const data = await fetchTours(url);

    console.log(data);
    console.log(process.env.NEXT_PUBLIC_API_URL);

    return (
        <>
            {data.length > 0
                ? data.map((item) => {
                      return <p key={item.id}>{item.id}</p>;
                  })
                : null}
            <div>
                <h1>Hello!</h1>
            </div>
        </>
    );
}
