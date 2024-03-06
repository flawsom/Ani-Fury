import { URI } from "@/constants";
import MainPage from "./_components/main-page";
import { getAnimeEpisodes, getAnimeInfoById } from "@/lib/function";
import { Metadata } from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] }
}

export async function generateMetadata({
  params,
  searchParams
}: Props): Promise<Metadata> {
  const info = await getAnimeInfoById(params.id);
  const episodes = await getAnimeEpisodes(params.id);
  const epId = searchParams?.ep || "";
  const query = params.id + "?ep=" + epId;

  const isCurrentEpisode = episodes?.episodes.find(
    (episode) => episode.episodeId === query
  );
  return {
    metadataBase: new URL(URI),
    title: `Watching Episode ${isCurrentEpisode?.number} | ${info?.anime.info.name} | AniFury`,
    generator: "Next.js",
    applicationName: "AniFury App",
    description: info?.anime.info.description,
    keywords: ["anime", "free anime", "no-ads", "no-popups", "AniFury", info?.anime.info.name || "", `watch ${info?.anime.info.id} on AniFury`, `Watch ${info?.anime.info.name} on AniFury`],
    authors: [{ name: "Siba | flawsom | vibes.him", url: "https://github.com/flawsom" }],
    creator: "Siba | flawsom | vibes.him | flawsom",
    publisher: "Siba | flawsom | vibes.him | flawsom",
    openGraph: {
      description: info?.anime.info.description,
      title: `Watch ${isCurrentEpisode?.title ? isCurrentEpisode.title : `Episode ${isCurrentEpisode?.number}`} Exclusively on AniFury without any popups or ads.`,
    },
    alternates: {
        canonical: "https://anifury.vercel.app",
      },
      formatDetection: {
        telephone: false,
      },
      twitter: {
        card: "summary",
        title: `Watch ${isCurrentEpisode?.title ? isCurrentEpisode.title : `Episode ${isCurrentEpisode?.number}`} from (${info?.anime.info.name}) Exclusively on AniFury without any popups or ads.`,
        description: info?.anime.info.description,
        siteId: `https://anifury.vercel.app/${info?.anime.info.id}`,
        creator: "@flawsom",
        creatorId: "Siba | flawsom | vibes.him",
        images: [info?.anime.info.poster || ""],
      },
  };
}
const WatchAnime = ({ params, searchParams }: Props) => {
  const episodeNumber = searchParams.ep as string;
  const query = params.id + "?ep=" + episodeNumber
  const server = searchParams.server as string;

  return (
    <MainPage episodeNumber={episodeNumber} params={params.id} query={query} server={server} />
  );
};
export default WatchAnime;
