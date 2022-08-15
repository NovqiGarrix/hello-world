import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { scheduleJob } from "node-schedule";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const NVDRIVE_SERVICE_ENDPOINT = process.env.NVDRIVE_SERVICE_ENDPOINT!;

  scheduleJob("*/55 * * * *", async () => {
    const resp = await fetch(
      `${NVDRIVE_SERVICE_ENDPOINT}/api/v1/access_token`,
      { method: "POST" }
    );
    console.log(resp.status);
  });

  return {
    props: {
      hello: params?.hello ?? "there",
    },
  };
};

const Hello: NextPage = () => {
  const router = useRouter();

  const capitalizeFirstWord = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="mx-auto space-x-2 text-6xl h-screen text-center flex items-center justify-center font-poppins w-full">
      <span className="italic">{'"'}</span>
      <h1>
        Hello, {capitalizeFirstWord((router.query?.hello as string) ?? "there")}
        .
      </h1>
      <p>How it{"'"}s going?</p>
      <span className="italic">{'"'}</span>
    </div>
  );
};

export default Hello;
