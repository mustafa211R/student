document.addEventListener("DOMContentLoaded", () => {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwXSL8qv_NxVfnU98uQIvI2Jc5JSFwGL47_OsH5qIzowvrosBL1skYAshi9ViVTsM-PUg/exec"; // ← ضع رابط Web App بعد النشر

  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      student_name: document.getElementById("student_name").value,
      dob: document.getElementById("dob").value,
      address: document.getElementById("address").value,
      guardian_phone: document.getElementById("guardian_phone").value,
      last_school: document.getElementById("last_school").value,
      registration_reason: document.getElementById("registration_reason").value,
      stage: document.getElementById("stage").value,
      grade: document.getElementById("grade").value,
      failure_years: document.getElementById("failure_years").value,
      leave_years: document.getElementById("leave_years").value,
      start_date: document.getElementById("start_date").value,
      disease_name: document.getElementById("medical_report").value,
      notes: document.getElementById("notes").value
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert("✅ تم تسجيل الطالب بنجاح!");
      form.reset();
    } catch (error) {
      alert("❌ خطأ أثناء إرسال البيانات!");
      console.error(error);
    }
  });
});
