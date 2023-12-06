"use client"

import { Container, Sidebar } from "@/components"
import styles from "./page.module.css"
import AppContextProvider from "@/contexts/AppContextProvider"

export default function Home() {
    return (
        <AppContextProvider>
            <main className={styles.main}>
                <Sidebar />
                <Container />
            </main>
        </AppContextProvider>
    )
}
