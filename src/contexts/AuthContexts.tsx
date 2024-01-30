import { ReactNode, createContext, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProvidersProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProvidersProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {

        setIsLoading(true)

        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            ToastAlerta("Usuário foi autenticado com sucesso!", "sucesso")

        } catch (error) {
            console.log(error)
            ToastAlerta("Credenciais para o usuário são invalidas", "erro")
        } finally {
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        })
    }
        return (
            <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
                {children}
            </AuthContext.Provider>

        )
    }
