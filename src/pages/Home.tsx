import FeatureButton from "../components/FeatureButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

type HomeProps = {
  onOpenChat: () => void;
};

function Home({ onOpenChat }: HomeProps) {
  return (
    <>
      <Header />

      <div onClick={onOpenChat}>
        <FeatureButton title="🤖 AI Chat" />
      </div>

      <FeatureButton title="📄 Summarize" />
      <FeatureButton title="🌐 Translate" />
      <FeatureButton title="📸 Screenshot" />
      <FeatureButton title="📚 PDF Assistant" />

      <Footer />
    </>
  );
}

export default Home;