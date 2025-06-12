import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json(
      { message: "이메일 주소를 입력해주세요." },
      { status: 400 }
    );
  }

  const appsScriptUrl = process.env.APPS_SCRIPT_URL;

  if (!appsScriptUrl) {
    console.error("Apps Script URL is not defined in environment variables.");
    return NextResponse.json(
      { message: "서버 설정 오류가 발생했습니다." },
      { status: 500 }
    );
  }

  try {
    // Forward the email to the Google Apps Script Web App
    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (result.status === "success") {
      return NextResponse.json({
        message: "성공적으로 등록되었습니다!",
      });
    } else {
      // Pass the error message from Apps Script if available
      return NextResponse.json(
        { message: result.message || "구글 시트 저장 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error forwarding request to Google Apps Script:", error);
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
} 