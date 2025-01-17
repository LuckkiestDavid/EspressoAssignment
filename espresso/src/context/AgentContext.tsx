import React, {createContext, useState, useEffect, ReactNode} from 'react';
import { Agent } from '../types/Agent';


interface AgentContextType {
    agents: Agent[];
    addAgent : (agent: Agent) => void;
    editAgent : (agent : Agent) => void;
    deleteAgent : (id : string) => void;
}

export const AgentContext = createContext <AgentContextType | undefined>(undefined);

export const AgentProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [agents, setAgents] = useState<Agent[]>([]);

    useEffect(() => {
        const savedAgents = localStorage.getItem('agents');
        if (savedAgents) {
            setAgents(JSON.parse(savedAgents))
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('agent', JSON.stringify(agents));
    }, [agents]);
    
    const addAgent = (agent: Agent) => {
        setAgents([...agents, agent]);
    };

    const editAgent = (updatedAgent: Agent) => {
        setAgents(agents.map(agent => agent.id === updatedAgent.id ? updatedAgent : agent));
    };

    const deleteAgent = (id: string) => {
        setAgents(agents.filter(agent => agent.id !== id));
    };

    return (
         <AgentContext.Provider value={{ agents, addAgent, editAgent, deleteAgent }}>
            {children}
        </AgentContext.Provider>
    );



}