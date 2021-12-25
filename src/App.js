import React,{useState, useEffect} from 'react';
import './style.scss'
import AllTask from "./components/AllTask/AllTask";
import AddFolder from "./components/AddFolder/AddFolder";
import Folder from "./components/Folder/Folder";
import All from "./components/All/All";
import Vanta from "./components/Vanta/Vanta";

const App = () => {

    const [all, setAll] = useState([]);
    const [folder, setFolder] = useState('');
    const [addFolder, setAddFolder] = useState(false);
    const [status, setStatus] = useState('all');

    const deleteHandlerFolder = (id) => {
        setAll(all.filter((item)=> item.id !== id));
        setStatus('all')
    };

    useEffect(()=>{
        setAll(JSON.parse(localStorage.getItem('all')))
    },[]);
    useEffect(()=>{
        localStorage.setItem('all', JSON.stringify(all));
    },[all]);

    return (
        <div className='App'>
            <main>
                <aside className='sidebar'>
                    <AllTask setStatus={setStatus}/>
                    <ul className='sidebar__list'>
                        {all.map((item)=>{
                            return (
                                <li key={item.id} className='sidebar__list-item' onClick={()=> setStatus(item.folder)}>
                                <div className='sidebar__list-color' style={{backgroundColor: item.color}}> </div>
                                    {item.folder}
                                <span className='folder__list-delete' onClick={(e)=> {
                                    e.stopPropagation();
                                    deleteHandlerFolder(item.id)
                                }
                                }>✘</span>
                                </li>
                            )
                        })}
                    </ul>
                    <AddFolder all={all}
                               setAll={setAll}
                               folder={folder}
                               setFolder={setFolder}
                               addFolder={addFolder}
                               setAddFolder={setAddFolder}/>
                </aside>
                <section>
                    {status === 'all'
                        ? <All setStatus={setStatus} setAll={setAll} all={all}/>
                        : <Folder setStatus={setStatus} setAll={setAll} all={all} status={status}/>
                    }
                    <Vanta/>
                </section>
            </main>
        </div>
    );
};

export default App;