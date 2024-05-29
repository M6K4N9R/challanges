import useSWR from "swr";
import styled from "styled-components";

const URL = "/api/random-character";
const helloWorldUrl = "/api/hello-world";

const fetcher = (...arg) => fetch(...arg).then((res) => res.json());

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 2rem;
  color: white;
  background-color: blue;
`;

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log("Fetcher function", fetcher);
  console.log("Data", data);

  if (error) return <div>Failed to Load your request</div>;
  if (isLoading) return <div>...Loading</div>;

  return (
    <StyledSection>
      <h1>Hi {data.firstName}</h1>
      <p>If your age is {data.age}</p>
      <section>Your gender must be {data.gender.toUpperCase()}</section>
    </StyledSection>
  );
}
