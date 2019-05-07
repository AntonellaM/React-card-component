import React, {Component} from 'react';
import MediaCard from './MediaCard';

class MediaList extends Component {
    render () {
        const mediaList = (
            <ul>
                <li>
                    <MediaCard 
                        username="Alex Guerrero" 
                        date="Lunes 26 de junio de 2017" 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ" 
                        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nostrum autem nesciunt dolor accusantium? Rerum doloribus ipsa, illum dicta, numquam repellat quas enim corrupti cum recusandae ratione similique assumenda deleniti." 
                        likes={0} 
                        heart={false}
                    />
                </li>
                <li>
                    <MediaCard 
                        username="Antonella Michelli" 
                        date="Miércoles 06 de Mayo de 2019" 
                        image="https://www.purina.es/gato/purina-one/sites/g/files/mcldtz1856/files/2018-06/Como_saber_si_mi_gato_esta_enfermo%20%282%29.jpg" 
                        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nostrum autem nesciunt dolor accusantium? Rerum doloribus ipsa, illum dicta, numquam repellat quas enim corrupti cum recusandae ratione similique assumenda deleniti." 
                        likes={30} 
                        heart={true}
                    />
                </li>
                <li>
                    <MediaCard 
                        username="Mari Loli" 
                        date="Lunes 26 de junio de 2017" 
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq007RfCfaF0F5KbFYlSRzlfzYyjhvtCob23jOKW0GpWvM-VauwQ" 
                        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nostrum autem nesciunt dolor accusantium? Rerum doloribus ipsa, illum dicta, numquam repellat quas enim corrupti cum recusandae ratione similique assumenda deleniti." 
                        likes={200} 
                        heart={true}
                    />
                </li>
            </ul>           
        );
        return mediaList;
    }
}

export default MediaList;