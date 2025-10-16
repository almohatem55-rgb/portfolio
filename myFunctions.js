console.log("تم تحميل الموقع بنجاح!");

// دالة للتحقق من تحميل jQuery
$(document).ready(function() {
    console.log("jQuery يعمل بشكل صحيح");
    
    // إضافة تأثيرات للبطاقات
    $('.student-card').hover(
        function() {
            $(this).css('transform', 'translateY(-5px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );
    // دالة لإظهار/إخفاء تفاصيل التطبيقات
$(document).ready(function() {
    console.log($('.details-checkbox').length);            // لم تجد العناصر jQuery  إذا ظهر الرقم 0  يعني أن 
    $('.details-checkbox').change(function() {
        var appId = $(this).data('app');
        console.log("تم النقر على:", appId); // تحقق من ظهور الرقم في console
        $('#details-' + appId).slideToggle(300); // إظهار أو إخفاء التفاصيل
    });
});
    });

// دالة للتحقق من صحة المدخلات في نموذج إضافة التطبيق
function validateAppForm() {
    let isValid = true;

    // التحقق من اسم التطبيق (يسمح بالإنجليزية فقط بدون فراغات)
    const appName = $('#appName').val().trim();
    const appNameRegex = /^[A-Za-z]+$/;
    if (!appNameRegex.test(appName)) {
        $('#appName').addClass('error').removeClass('success');
        $('#appNameError').show();
        isValid = false;
    } else {
        $('#appName').addClass('success').removeClass('error');
        $('#appNameError').hide();
    }

    // التحقق من اسم الشركة (مسموح بالإنجليزية فقط)
    const companyName = $('#companyName').val().trim();
    const companyNameRegex = /^[A-Za-z\s]+$/;
    if (!companyNameRegex.test(companyName)) {
        $('#companyName').addClass('error').removeClass('success');
        $('#companyNameError').show();
        isValid = false;
    } else {
        $('#companyName').addClass('success').removeClass('error');
        $('#companyNameError').hide();
    }

    // التحقق من الموقع الإلكتروني
    const website = $('#website').val().trim();
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlRegex.test(website)) {
        $('#website').addClass('error').removeClass('success');
        $('#websiteError').show();
        isValid = false;
    } else {
        $('#website').addClass('success').removeClass('error');
        $('#websiteError').hide();
    }

    // التحقق من مجال الاستخدام
    const category = $('#category').val();
    if (category === '') {
        $('#category').addClass('error').removeClass('success');
        $('#categoryError').show();
        isValid = false;
    } else {
        $('#category').addClass('success').removeClass('error');
        $('#categoryError').hide();
    }

    // التحقق من الشرح المختصر
    const description = $('#description').val().trim();
    if (description.length < 10) {
        $('#description').addClass('error').removeClass('success');
        $('#descriptionError').show();
        isValid = false;
    } else {
        $('#description').addClass('success').removeClass('error');
        $('#descriptionError').hide();
    }

    return isValid;
}

// عند تحميل الصفحة
$(document).ready(function() {
    console.log("تم تحميل صفحة إضافة التطبيق");

    // إعادة تعيين النموذج
    $('button[type="reset"]').click(function() {
        $('.form-input').removeClass('error success');
        $('.error-message').hide();
    });

    // التحقق أثناء الكتابة
    $('#appName, #companyName, #website, #description').on('input', function() {
        $(this).removeClass('error success');
        $(this).siblings('.error-message').hide();
    });

    $('#category').change(function() {
        $(this).removeClass('error success');
        $('#categoryError').hide();
    });

    // عند إرسال النموذج
    $('#appForm').submit(function(e) {
        e.preventDefault();
        
        if (validateAppForm()) {
            alert('تم إرسال البيانات بنجاح! سيتم نقلوك إلى صفحة التطبيقات.');
            //  هنا سيتم حفظ البيانات ونقل المستخدم
            window.location.href = 'apps.html';
        } else {
            alert('يرجى تصحيح الأخطاء في النموذج قبل الإرسال.');
        }
    });

    // تأثيرات للبطاقات في الصفحات الأخرى
    $('.student-card').hover(
        function() {
            $(this).css('transform', 'translateY(-5px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );
});
