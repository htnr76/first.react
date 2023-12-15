import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Skapa = () => {
    const [ tittel, setTittel] =useState('');
    const [body, setBody] = useState('');
    const [skapare, setSkapare] = useState('mario');
    const [ isPending, setPending] = useState(false);
    const history = useHistory(); 

    const handelSubmit = (e) => {
        e.preventDefault();
        const blog = {tittel, body, skapare};

        setPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            history.push('/hem');
        });
    }

    return (
        <div className="Skapa">
            <h2>Skapa en ny blog</h2>
            <form onSubmit={handelSubmit}>
                <label>Blog titel</label>
                <input
                type="text"
                required
                value={tittel}
                onChange={(e) => setTittel(e.target.value)}
                />
                <label>Inehållet</label>
                <textarea
                required 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Ditt namn</label>
                <select value={skapare} onChange={(e) => setSkapare(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>
                    Lägg till blog
                </button>}

                {isPending && <button>Håller på att lägga upp bloggen nu...</button>}
                <p>{tittel}</p>
                <p>{body}</p>
                <p>{skapare}</p>
            </form>
        </div>
      );
}
 
export default Skapa;
