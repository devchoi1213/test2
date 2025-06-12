import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="ml-2 text-lg font-bold">SimpleApp</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
            기능
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
            가격
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            문의
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  🚀 새로운 기능 출시
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  더 스마트한 방식으로
                  <br />
                  <span className="text-primary">비즈니스를 성장</span>시키세요
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  SimpleApp으로 업무 효율성을 높이고, 팀 협업을 개선하며, 비즈니스 목표를 더 빠르게 달성하세요.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="h-11 px-8">
                  무료로 시작하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-11 px-8">
                  데모 보기
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2">5.0 (1,200+ 리뷰)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>10,000+ 사용자</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">왜 SimpleApp을 선택해야 할까요?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  강력한 기능과 직관적인 인터페이스로 업무 생산성을 극대화하세요.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary" />
                  <CardTitle>빠른 성능</CardTitle>
                  <CardDescription>최적화된 알고리즘으로 빠르고 안정적인 서비스를 제공합니다.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary" />
                  <CardTitle>보안 강화</CardTitle>
                  <CardDescription>엔터프라이즈급 보안으로 데이터를 안전하게 보호합니다.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary" />
                  <CardTitle>팀 협업</CardTitle>
                  <CardDescription>실시간 협업 도구로 팀워크를 향상시키고 효율성을 높입니다.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    업무 효율성을 200% 향상시키세요
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    SimpleApp을 사용하는 기업들은 평균적으로 업무 효율성이 200% 향상되었습니다.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>자동화된 워크플로우</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>실시간 데이터 분석</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>직관적인 대시보드</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>24/7 고객 지원</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    지금 시작하기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  <Card className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary">200%</div>
                    <div className="text-sm text-muted-foreground">효율성 향상</div>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">만족한 고객</div>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">가동 시간</div>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">고객 지원</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
                  지금 바로 시작하세요
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  14일 무료 체험으로 SimpleApp의 강력한 기능을 경험해보세요. 신용카드 등록 없이 바로 시작할 수 있습니다.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="이메일 주소를 입력하세요"
                    className="max-w-lg flex-1 bg-background"
                  />
                  <Button type="submit" variant="secondary">
                    시작하기
                  </Button>
                </form>
                <p className="text-xs text-primary-foreground/60">
                  가입하시면{" "}
                  <Link href="#" className="underline underline-offset-2">
                    이용약관
                  </Link>
                  에 동의하는 것으로 간주됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 SimpleApp. 모든 권리 보유.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            이용약관
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            개인정보처리방침
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            고객지원
          </Link>
        </nav>
      </footer>
    </div>
  )
}
