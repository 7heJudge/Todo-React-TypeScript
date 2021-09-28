import {useHistory} from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet cum cumque explicabo
                praesentium, quidem? Ab accusantium delectus et.</p>
            <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    )
}