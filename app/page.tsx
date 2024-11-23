const url = "https://www.course-api.com/react-tours-project";
export default async function Home() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return (
        <div>
            <h1>Hello!</h1>
        </div>
    );
}
