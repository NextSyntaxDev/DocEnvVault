"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Download,
  Terminal,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Code,
  Zap,
  Shield,
  Copy,
} from "lucide-react"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"

export default function InstallationGuide() {
  const [copiedCurl, setCopiedCurl] = useState(false)
  const [copiedWget, setCopiedWget] = useState(false)

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === "curl") {
        setCopiedCurl(true)
        setTimeout(() => setCopiedCurl(false), 2000)
      } else if (type === "wget") {
        setCopiedWget(true)
        setTimeout(() => setCopiedWget(false), 2000)
      }
    } catch (err) {
      console.error("Falha ao copiar: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Instalação Rápida</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
            EnvVault Setup
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Configure o EnvVault em sua máquina local em poucos minutos com nosso script automatizado
          </p>

          {/* Project Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              variant="outline"
              className="bg-gray-800/50 border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
              onClick={() => window.open("https://github.com/NextSyntaxDev/EnvVault", "_blank")}
            >
              <FaGithub className="w-4 h-4 mr-2" />
              Projeto no GitHub
            </Button>
            <div className="text-gray-400 text-sm">
              Desenvolvido por{" "}
              <Button
                variant="link"
                className="p-0 h-auto text-purple-400 hover:text-purple-300"
                onClick={() => window.open("https://github.com/NextSyntaxDev", "_blank")}
              >
                NextSyntax
              </Button>
            </div>
          </div>
        </div>

        {/* Downloads via Terminal */}
        <Card className="mb-8 bg-gray-800/50 backdrop-blur-sm border-purple-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-300">
              <Terminal className="w-6 h-6" />
              Downloads via Terminal no Windows
            </CardTitle>
            <CardDescription className="text-gray-400">
              Alternativa ao wget do Linux para automação de downloads
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <h4 className="font-semibold mb-2 text-purple-300">cURL (Recomendado)</h4>
              <p className="text-sm text-gray-400 mb-3">
                O cURL vem pré-instalado no Windows 10/11 e é a alternativa mais próxima ao wget.
              </p>
              <div className="relative">
                <div className="bg-gray-900/80 border border-purple-500/30 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto pr-12">
                  <div className="mb-2 text-gray-500"># Baixar o script do EnvVault</div>
                  <div>curl -O https://github.com/NextSyntaxDev/EnvVault/releases/download/v1.0.0/install.sh</div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
                  onClick={() =>
                    copyToClipboard(
                      "curl -O https://github.com/NextSyntaxDev/EnvVault/releases/download/v1.0.0/install.sh",
                      "curl",
                    )
                  }
                >
                  {copiedCurl ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Requisitos do Sistema */}
        <Card className="mb-8 bg-gray-800/50 backdrop-blur-sm border-purple-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-300">
              <CheckCircle className="w-6 h-6" />
              Requisitos do Sistema
            </CardTitle>
            <CardDescription className="text-gray-400">
              Dependências obrigatórias antes de iniciar a instalação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <Badge className="bg-purple-600 text-white">Obrigatório</Badge>
                  <span className="font-medium text-purple-300">Docker Desktop</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <Badge className="bg-purple-600 text-white">Obrigatório</Badge>
                  <span className="font-medium text-purple-300">Git</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <Badge className="bg-purple-600 text-white">Obrigatório</Badge>
                  <span className="font-medium text-purple-300">JDK 21+</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <Badge className="bg-purple-600 text-white">Obrigatório</Badge>
                  <span className="font-medium text-purple-300">Maven</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <Badge className="bg-purple-600 text-white">Linux</Badge>
                  <span className="font-medium text-purple-300">dos2unix</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instalação */}
        <Card className="mb-8 bg-gray-800/50 backdrop-blur-sm border-purple-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-300">
              <Download className="w-6 h-6" />
              Instalação do EnvVault
            </CardTitle>
            <CardDescription className="text-gray-400">
              Duas opções simples para começar: download direto ou linha de comando
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Opções de Download */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Opção 1: Download Direto */}
              <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-purple-300">Download Direto</h3>
                </div>
                <p className="text-gray-400 mb-4">Clique para baixar o script automaticamente</p>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                  onClick={() =>
                    window.open(
                      "https://github.com/NextSyntaxDev/EnvVault/releases/download/v1.0.0/install.sh",
                      "_blank",
                    )
                  }
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar install.sh
                </Button>
              </div>

              {/* Opção 2: Linha de Comando */}
              <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-purple-300">Via Terminal (Linux)</h3>
                </div>
                <p className="text-gray-400 mb-4">Use wget para baixar via linha de comando</p>
                <div className="relative">
                  <div className="bg-gray-900/80 border border-purple-500/30 text-green-400 p-3 rounded-lg font-mono text-sm overflow-x-auto pr-12">
                    <div>wget https://github.com/NextSyntaxDev/EnvVault/releases/download/v1.0.0/install.sh</div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
                    onClick={() =>
                      copyToClipboard(
                        "wget https://github.com/NextSyntaxDev/EnvVault/releases/download/v1.0.0/install.sh",
                        "wget",
                      )
                    }
                  >
                    {copiedWget ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>

            {/* Preparação do Sistema */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-300 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Preparação do Sistema
              </h3>

              <Tabs defaultValue="linux" className="w-full">
                <TabsList className="bg-gray-700/50 border-purple-500/30">
                  <TabsTrigger value="linux" className="data-[state=active]:bg-purple-600">
                    Linux
                  </TabsTrigger>
                  <TabsTrigger value="windows" className="data-[state=active]:bg-purple-600">
                    Windows
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="linux" className="space-y-4">
                  <Alert className="bg-purple-500/10 border-purple-500/30">
                    <AlertTriangle className="h-4 w-4 text-purple-400" />
                    <AlertDescription className="text-purple-300">
                      <strong>Linux:</strong> É necessário instalar o dos2unix antes de executar o script.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-3">
                    <h4 className="font-medium text-purple-300">Instalar dos2unix:</h4>
                    <div className="bg-gray-900/80 border border-purple-500/30 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <div className="mb-2 text-gray-500"># Ubuntu/Debian</div>
                      <div className="mb-2">sudo apt-get install dos2unix</div>
                      <div className="mb-2 text-gray-500"># CentOS/RHEL</div>
                      <div>sudo yum install dos2unix</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="windows" className="space-y-4">
                  <Alert className="bg-green-500/10 border-green-500/30">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <AlertDescription className="text-green-300">
                      <strong>Windows:</strong> O dos2unix já vem incluído com o Git Bash. Não é necessário instalar
                      separadamente.
                    </AlertDescription>
                  </Alert>
                </TabsContent>
              </Tabs>
            </div>

            {/* Execução */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Executando o Script
              </h3>

              <div className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-purple-500/30 rounded-xl">
                <p className="text-gray-300 mb-4">
                  <strong>Para todos os sistemas (Linux e Windows):</strong> Execute o comando abaixo no terminal:
                </p>
                <div className="bg-gray-900/80 border border-purple-500/30 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="mb-2 text-gray-500"># Navegue até onde salvou o arquivo</div>
                  <div className="mb-2">cd /caminho/para/o/arquivo/</div>
                  <div className="mb-2 text-gray-500"># Execute o script</div>
                  <div>bash install.sh</div>
                </div>

                <Alert className="mt-4 bg-blue-500/10 border-blue-500/30">
                  <AlertTriangle className="h-4 w-4 text-blue-400" />
                  <AlertDescription className="text-blue-300">
                    <strong>Windows:</strong> Use o Git Bash ou WSL para executar scripts .sh
                  </AlertDescription>
                </Alert>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <p className="text-sm text-purple-300">
                  <strong>O que acontece:</strong> O script clona o repositório, compila o backend Java, e inicia os
                  serviços automaticamente. A primeira execução pode levar alguns minutos para baixar todas as
                  dependências.
                </p>
              </div>
            </div>

            {/* Acesso */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300 flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Acessando a Aplicação
              </h3>

              <div className="p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl">
                <p className="text-gray-300 mb-4">Após a instalação, acesse a aplicação em:</p>
                <div className="flex items-center justify-between bg-gray-900/50 border border-green-500/30 p-4 rounded-lg">
                  <code className="text-xl font-mono text-green-400">https://localhost:7777/login</code>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open("https://localhost:7777/login", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Abrir
                  </Button>
                </div>

                <Alert className="mt-4 bg-yellow-500/10 border-yellow-500/30">
                  <Shield className="h-4 w-4 text-yellow-400" />
                  <AlertDescription className="text-yellow-300">
                    <strong>Certificado SSL:</strong> O navegador mostrará um aviso de segurança devido ao certificado
                    autoassinado. Clique em "Avançado" e "Continuar para localhost" para prosseguir.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gerenciamento */}
        <Card className="bg-gray-800/50 backdrop-blur-sm border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-purple-300">Gerenciamento dos Serviços</CardTitle>
            <CardDescription className="text-gray-400">
              Como monitorar e controlar os serviços do EnvVault
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="logs" className="w-full">
              <TabsList className="bg-gray-700/50 border-purple-500/30">
                <TabsTrigger value="logs" className="data-[state=active]:bg-purple-600">
                  Ver Logs
                </TabsTrigger>
                <TabsTrigger value="stop" className="data-[state=active]:bg-purple-600">
                  Parar Serviços
                </TabsTrigger>
              </TabsList>

              <TabsContent value="logs" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-700/30 border border-purple-500/30 rounded-lg">
                    <h4 className="font-medium mb-2 text-purple-300">Frontend (Docker)</h4>
                    <div className="bg-gray-900/80 text-green-400 p-3 rounded font-mono text-sm">
                      <div>cd EnvVault/frontend</div>
                      <div>docker compose logs -f</div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-700/30 border border-pink-500/30 rounded-lg">
                    <h4 className="font-medium mb-2 text-pink-300">Backend (Java)</h4>
                    <div className="bg-gray-900/80 text-green-400 p-3 rounded font-mono text-sm">
                      <div>cd EnvVault/backend/target</div>
                      <div>tail -f backend_output.log</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="stop" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-700/30 border border-red-500/30 rounded-lg">
                    <h4 className="font-medium mb-2 text-red-300">Parar Frontend</h4>
                    <div className="bg-gray-900/80 text-red-400 p-3 rounded font-mono text-sm">
                      <div>cd EnvVault/frontend</div>
                      <div>docker compose down</div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-700/30 border border-red-500/30 rounded-lg">
                    <h4 className="font-medium mb-2 text-red-300">Parar Backend</h4>
                    <div className="bg-gray-900/80 text-red-400 p-3 rounded font-mono text-sm">
                      <div className="mb-1 text-gray-500"># Windows</div>
                      <div className="mb-2">taskkill /F /IM java.exe</div>
                      <div className="mb-1 text-gray-500"># Linux</div>
                      <div>pkill -f java</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
