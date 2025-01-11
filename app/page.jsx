import Feed from '../components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Disconver & Share 
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI - Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        There's a prompt for it! It is a platform that allows you to 
        discover the best, creative GPT prompts and share your own creative ones.
      </p>

      <Feed />
    </section>
  )
}

export default Home