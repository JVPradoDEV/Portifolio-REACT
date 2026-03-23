import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem iParagrafosum dolor sit amet consectetur adipisicing elit. Odit,
      ullam harum! Fuga consequuntur optio maxime doloribus et, molestiae facere
      quae, modi pariatur ipsam facilis ratione cum rem porro? Est, dolore!
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats-fast.vercel.app/api?username=jvpradodev&show_icons=true&theme=dracula"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=jvpradodev&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
