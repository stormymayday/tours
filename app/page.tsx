import { fetchTours } from "@/utils";

export default async function Home() {
    const data = await fetchTours(process.env.API_URL || "");

    console.log(data);

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
