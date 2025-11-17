import Link from 'next/link'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">兒童讀經班</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              傳承中華經典文化，培養孩子的品格與智慧
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">快速連結</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="opacity-90 hover:opacity-100 transition-opacity">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="#courses" className="opacity-90 hover:opacity-100 transition-opacity">
                  課程介紹
                </Link>
              </li>
              <li>
                <Link href="#enrollment" className="opacity-90 hover:opacity-100 transition-opacity">
                  報名資訊
                </Link>
              </li>
              <li>
                <Link href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">聯絡資訊</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>電話: (02) 2345-6789</li>
              <li>信箱: info@readingclass.tw</li>
              <li>地址: 台北市中正區和平西路一號</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">追蹤我們</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors flex items-center justify-center"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors flex items-center justify-center"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors flex items-center justify-center"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>© 2025 兒童讀經班 版權所有</p>
        </div>
      </div>
    </footer>
  )
}
