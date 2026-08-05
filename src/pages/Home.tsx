import FeatureButton from "../components/FeatureButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

type HomeProps = {
  onOpenChat: () => void;
  onSummarize: () => void;
};

function Home({ onOpenChat, onSummarize }: HomeProps) {
  return (
    <>
      <Header />

      <div onClick={onOpenChat}>
        <FeatureButton title="🤖 AI Chat" />
      </div>

      <div onClick={onSummarize}>
        <FeatureButton title="📄 Summarize Current Page" />
      </div>

      <FeatureButton title="🌐 Translate" />
      <FeatureButton title="📸 Screenshot" />
      <FeatureButton title="📚 PDF Assistant" />

      <Footer />
    </>
  );
}

export default Home;